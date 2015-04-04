function StationViewModel(station, interval) {
  if (interval < 300000) {
    interval = 300000
  }
  var self = this;
  self.playing = ko.observable("tunes");
  self.artist = ko.observable("artist");
  self.live = ko.observable(false);
  self.listeners = ko.observable(0);
  self.update = function() {
    jQuery.getJSON('http://intbass.com/api/station/'+station+'?callback=?',
      function(data) {
        jQuery.each(['playing','artist','listeners','live'], function(i,l) { self[l](data[l]); });
      }
    );
  };
  var int;
  self.start = function() {
    int = window.setInterval(self.update,interval);
  }
  self.stop = function() {
    window.clearInterval(int);
  }
  self.update();
  //self.start();
}
