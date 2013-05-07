﻿function loadPlayListPanel($scope,$http) {
    $('#playListBar').css('display', 'inline');

    $scope.loadingPlayList = true;
    $http
		.get('/api/playlist')
		.success(function (data) {
		    $scope.playlists = data;
		    $scope.loadingPlayList = false;
		})
		.error(function (data) {
		    alert('500: Error interno');
		});

    /*$.ajax({
        url: '/api/playlist',
        type: 'GET',
        processData: false,
        contentType: false,
        success: function (res) {
            $scope.playlists = res;
        },
        error: function (res) {
            alert('500: Error interno');
        }
    });*/
}