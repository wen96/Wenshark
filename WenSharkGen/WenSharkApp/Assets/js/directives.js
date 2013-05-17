﻿angular.module('wenshark')
.directive('uiValidateEquals', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {

            function validateEqual(myValue, otherValue) {
                if (myValue === otherValue) {
                    ctrl.$setValidity('equal', true);
                    return myValue;
                } else {
                    ctrl.$setValidity('equal', false);
                    return undefined;
                }
            }

            scope.$watch(attrs.uiValidateEquals, function (otherModelValue) {
                validateEqual(ctrl.$viewValue, otherModelValue);
            });

            ctrl.$parsers.unshift(function (viewValue) {
                return validateEqual(viewValue, scope.$eval(attrs.uiValidateEquals));
            });

            ctrl.$formatters.unshift(function (modelValue) {
                return validateEqual(modelValue, scope.$eval(attrs.uiValidateEquals));
            });
        }
    };
})
.directive('wsSong', function() {
    return {
        restrict: 'A',
        template: 
            '<span class="song-img small-2 columns left">' + 
                '<img src="{{song.Album.Image}}" width="50" />' + 
            '</span>' + 
            '<span class="song-name small-5 columns left">' +
                '<p class="name">{{song.Name}}</p>' + 
                '<p class="subname"><a href="#/artist/{{song.Artist.Id}}">{{song.Artist.Name}}</a> · ' + 
                '<a href="#/album/{{song.Album.Id}}">{{song.Album.Name}}</a></p>' + 
            '</span>' + 
            '<span class="song-controls small-5 columns right">' + 
                '<ul class="button-group">' + 
                    '<li ng-hide="isFavorited(song)"><button class="tiny" ng-click="addToFavorites(song)"><span class="foundicon-star"></span></button></li>' +
                    '<li ng-show="isFavorited(song)"><a class="tiny" ng-click="removeFromFavorites(song)"><span class="foundicon-star"></span></a></li>' +
                    '<li><button class="tiny" ng-click="addNewPlublication(song)" data-reveal-id="modalNewPublication"><span class="foundicon-globe"></span></button></li>' +
                    '<li><button class="tiny" ng-click="addToPlaylist(song)"><span class="foundicon-plus"></span></button></li>' +
                    '<li><button class="tiny" ng-click="addToPlaylistAndPlay(song)"><span class="tiny play"></span></button></li>' +
                    
                '</ul>' + 
            '</span>' 
            
    }
})
.directive('wsAlbum', function() {
    return {
        restrict: 'A',
        template: 
            '<span class="small-2 columns left">' +
                '<img src="{{album.Image}}" width="50" />' + 
            '</span>' + 
            '<span class="small-6 columns left">' + 
                '<a href="#/album/{{album.Id}}">' + 
                    '<p class="name">{{album.Name}}</p>' + 
                '</a>' + 
            '</span>'+
            '<span class="song-controls small-4 columns right">' +
                '<ul class="button-group">' +
                    '<li><button class="tiny" ng-click="addNewPlublication(album)" data-reveal-id="modalNewPublication"><span class="foundicon-globe"></span></button></li>' +
                '</ul>' +
            '</span>'
    }
})
.directive('wsArtist', function() {
    return {
        restrict: 'A',
        template: 
            '<span class="small-2 columns left">' +
                '<img src="{{artist.Image}}" width="50" />' + 
            '</span>' + 
            '<span class="small-6 columns left">' + 
                '<a href="#/artist/{{artist.Id}}">' + 
                    '<p class="name">{{artist.Name}}</p>' + 
                '</a>' + 
            '</span>' +
            '<span class="song-controls small-4 columns right">' +
                '<ul class="button-group">' +
                    '<li><button class="tiny" ng-click="addNewPlublication(artist)" data-reveal-id="modalNewPublication"><span class="foundicon-globe"></span></button></li>' +
                '</ul>' +
            '</span>'
    }
})
.directive('wsGenre', function() {
    return {
        restrict: 'A',
        template:
            '<span class="radius label">{{genre.Name}}</span>'
    }
})
.directive('wsUser',function(){
    return {
        restrict: 'A',
        template:
            '<span class="small-2 columns left">' +
                '<img src="{{user.Id}}" width="50" />' +
            '</span>' +
            '<span class="small-6 columns left">' +
                '<a href="#/profile/{{user.Id}}">' +
                    '<p class="name">{{user.Name}}</p>' +
                '</a>' +
            '</span>'+
            '<a class="button" ng-hide="user.Follow" ng-click="seguirPersona(user.Id)">Seguir</a>' +
            '<a class="button" ng-show="user.Follow" ng-click="dejarseguirPersona(user.Id)">Dejar de seguir</a>'
    }
})
.directive('wsPlaylist',function(){
    return {
        restrict: 'A',
        template:
            '<div class="row collapse">'+
            '<a class="large-8 columns" href="#/playlist/{{playlist.Id}}">{{playlist.Name}}</a> ' +
            '<a style="cursor: pointer" ng-click="playPlayList(playlist)" class="tiny large-2 columns"><span class="tiny play"></span></a>' +
            '</div>'
    }
})
.directive('wsPublication',function(){
    return {
        restrict: 'A',
        template:
            '<img src="http://localhost:5749/Assets/img/albums/reanimation.jpg" width="15" height="15">'+
            '<p><span class="user">Adrian</span> shared this:</p>'+
            '<br>'+
            '<p class="quote">{{publication.Text}}</p>'+
            '<div>'+
                '<img class="left" src="http://localhost:5749/Assets/img/albums/reanimation.jpg" width="50" height="50">'+
                '<div>'+
                    '<p class="song">Gold on the no se que</p>'+
                    '<p>by <span class="artist">The Black Keys</span></p>'+
                '</div>'+
            '</div>'
    }
})

;
