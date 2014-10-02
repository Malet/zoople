(function(){
  app.factory('Property', function($http, $q){
    var ZOOPLA_URL = 'http://www.zoopla.co.uk/to-rent/property/london/'

    to_json = function(listings){
      return listings.map(function(){
        $this = $(this)
        prices = /.([0-9,]+) pcm  \(.([0-9,]+) pw\)/.exec($this.find('.text-price').text().trim())
        return {
          id: $this.data('listing-id'),
          prices: {
            pcm: parseInt(prices[1].replace(',','')),
            pw: parseInt(prices[2].replace(',',''))
          },
          coords: {
            latitude: $this.find('meta[itemprop="latitude"]').attr('content'),
            longitude: $this.find('meta[itemprop="longitude"]').attr('content')
          }
        }
      });
    }

    return {
      fetch: function(page_size, query){
        // Default 40 results in london area
        page_size = typeof page_size !== 'undefined' ? page_size : 40;
        q = typeof q !== 'undefined' ? q : 'london';
        return $http.get(ZOOPLA_URL, {
          params: {
            include_retirement_homes: 'false',
            new_homes: 'include',
            q: q,
            search_source: 'nav',
            view_type: 'grid',
            page_size: page_size
          },
          responseType: 'document'
        }).then(function(response){
          deferred = $q.defer();
          deferred.resolve(to_json($(response.data).find('ul.listing-results li')));
          return deferred.promise;
        });
      }
    }
    // Photos can be retrieved at this url:
    //   http://www.zoopla.co.uk/ajax/photo/hover/?listing_id=33478338
    // replace the end of the retrieved urls with '_354_500.jpg' for large format
  });
})();
