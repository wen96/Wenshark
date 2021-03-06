﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WenSharkGenNHibernate.CEN.Default_;
using WenSharkGenNHibernate.EN.Default_;
using WenSharkCP.WensharkCP;
using System.Web.Security;
using Newtonsoft.Json.Linq;


namespace WenSharkApp.Controllers
{
    public class PlayListController : ApiController
    {

        public HttpResponseMessage get(int id)
        {

            PlayListCP playlistCP = new PlayListCP();
            PlayListEN playlist = playlistCP.getPlayList(id);
            if (playlist == null)
            {
                return this.Request.CreateResponse(HttpStatusCode.NotFound, "PlayList no encontrada");
            }
            else
            {
                return this.Request.CreateResponse(HttpStatusCode.OK, playlist);
            }
        }


        [Authorize]
        public HttpResponseMessage getPlayLists()
        {
            PlayListCP playlistCP = new PlayListCP();

            int id = int.Parse(this.User.Identity.Name);           
            IList<PlayListEN> l = playlistCP.getByUser(id);
            
            return this.Request.CreateResponse(HttpStatusCode.OK, l);
  
        }

        [Authorize]
        public HttpResponseMessage putPlaylist(JObject data)
        {
            int idUser = int.Parse(this.User.Identity.Name);
            string name = data["name"].ToString();
            List<int> songs =  data["songs"].ToObject<List<int>>();

            PlayListCEN playCEN = new PlayListCEN();
            int idNewPlaylist = playCEN.New_(name);
            playCEN.Relationer_song(idNewPlaylist, songs);
            playCEN.Relationer_user(idNewPlaylist, idUser);

            return this.Request.CreateResponse(HttpStatusCode.OK, new { Id = idNewPlaylist, Name = name });
        }

        [Authorize]
        public HttpResponseMessage postPlaylist(JObject data)
        {
            int idUser = int.Parse(this.User.Identity.Name);
            string name = data["name"].ToString();
            int idPlaylist = data["id"].ToObject<int>();

            PlayListCP playlistCP = new PlayListCP();
            if (playlistCP.isOwner(idPlaylist, idUser))
            {
                PlayListCEN playCEN = new PlayListCEN();
                playCEN.Modify(idPlaylist, name);

                return this.Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                return this.Request.CreateResponse(HttpStatusCode.Forbidden);
            }
        }

        [Authorize]
        public HttpResponseMessage deletePlaylist(int id)
        {
            int idUser = int.Parse(this.User.Identity.Name);

            PlayListCP playlistCP = new PlayListCP();
            if (playlistCP.isOwner(id, idUser))
            {
                PlayListCEN playCEN = new PlayListCEN();
                playlistCP.unbind(id);
                playCEN.Destroy(id);

               

                return this.Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                return this.Request.CreateResponse(HttpStatusCode.Forbidden);
            }

        }
    }
}
