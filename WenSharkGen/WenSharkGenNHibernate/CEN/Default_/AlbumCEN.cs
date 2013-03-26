

using System;
using System.Text;

using NHibernate;
using NHibernate.Cfg;
using NHibernate.Criterion;
using NHibernate.Exceptions;

using WenSharkGenNHibernate.EN.Default_;
using WenSharkGenNHibernate.CAD.Default_;

namespace WenSharkGenNHibernate.CEN.Default_
{
public partial class AlbumCEN
{
private IAlbumCAD _IAlbumCAD;

public AlbumCEN()
{
        this._IAlbumCAD = new AlbumCAD ();
}

public AlbumCEN(IAlbumCAD _IAlbumCAD)
{
        this._IAlbumCAD = _IAlbumCAD;
}

public IAlbumCAD get_IAlbumCAD ()
{
        return this._IAlbumCAD;
}

public int New_ (Nullable<DateTime> p_published, string p_name, Nullable<DateTime> p_created, int p_artist)
{
        AlbumEN albumEN = null;
        int oid;

        //Initialized AlbumEN
        albumEN = new AlbumEN ();
        albumEN.Published = p_published;

        albumEN.Name = p_name;

        albumEN.Created = p_created;


        if (p_artist != -1) {
                albumEN.Artist = new WenSharkGenNHibernate.EN.Default_.ArtistEN ();
                albumEN.Artist.Id = p_artist;
        }

        //Call to AlbumCAD

        oid = _IAlbumCAD.New_ (albumEN);
        return oid;
}

public void Destroy (int id)
{
        _IAlbumCAD.Destroy (id);
}

public void Modify (int p_oid, Nullable<DateTime> p_published, string p_name, Nullable<DateTime> p_created)
{
        AlbumEN albumEN = null;

        //Initialized AlbumEN
        albumEN = new AlbumEN ();
        albumEN.Id = p_oid;
        albumEN.Published = p_published;
        albumEN.Name = p_name;
        albumEN.Created = p_created;
        //Call to AlbumCAD

        _IAlbumCAD.Modify (albumEN);
}
}
}
