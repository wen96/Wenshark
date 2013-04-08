/* Controllers for AngularJS */

//Main controller of the app
function MainCtrl ($scope) {
	
}

//Controller for the search
function SearchCtrl ($scope, $routeParams, $http) {
	$scope.query = $routeParams.query;
	$scope.loading = true;
	$http
		.get('/api/search?name=' + $scope.query)
		.success(function (data) {
			$scope.loading = false;
			console.log('Acabo de cargar: ' + $scope.loading);
			$scope.songs = data.songs;
			$scope.albums = data.albums;
			$scope.artists = data.artists;
			console.log($scope.songs);
		});
	
	$scope.dummyArr = [];
	for(var i = 0; i < 10; i++) {
		var dummy = {
			name: 'Test song - ' + i,
			fname: 'song_file.mp3',
			id: '900' + i,
			album: {
				id: '0',
				name: 'Album wapo'
			},
			artist: {
				id: '0',
				name: 'Artista wapo'
			}
		};
		$scope.dummyArr.push(dummy);
	}
	
}