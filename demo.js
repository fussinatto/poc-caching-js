(function(){
  var getScriptURL = function() {

    var currentScript = document.currentScript || (function() {
      var scripts = document.getElementsByTagName('script');
      return scripts[scripts.length - 1];
    })();
    return currentScript.src;
  };
  
  

  var getHashParams = function (url) {
    var match, hashRegexp, hashes;

     if (!url) {
      return {};
    }

    hashes = {};
    hashRegexp = /[?#&](\w+)=?([^&#]*)|&|#/g;

    do {
        match = hashRegexp.exec(url);
        if (match && match[1]) {
          hashes[match[1]] = match[2];
        }
    } while (match);

    return hashes;
  };

  var scriptUrl = getScriptURL();
  console.log(scriptUrl);
  console.log(getHashParams(scriptUrl));

})();
/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam dui eu tempus vulputate. Sed quis nulla ac ipsum congue sagittis a ac mi. Duis iaculis tortor lacus, in molestie mauris blandit vel. Vestibulum pharetra, nisi sed pretium rhoncus, erat justo posuere metus, sed interdum nunc justo nec metus. Cras suscipit interdum neque. Quisque sodales ipsum sed tortor mattis tincidunt. Donec auctor posuere justo, et sagittis lorem pellentesque in. Nam vestibulum urna ac nisi faucibus viverra. Maecenas molestie ligula sed nisi volutpat malesuada. Pellentesque iaculis tellus quis venenatis placerat. Mauris auctor, est placerat euismod malesuada, mi ex feugiat mauris, a euismod nulla orci vitae libero. Fusce volutpat felis quis accumsan blandit. Nullam ut finibus nibh, vel cursus felis. Nunc congue ultrices ligula, vitae aliquet ex feugiat eget. Vivamus viverra, lectus vel imperdiet vulputate, neque ante pretium metus, eu scelerisque est neque cursus diam

Donec euismod commodo quam ac convallis. Duis vitae purus dapibus, porttitor quam vel, aliquam massa. Sed mattis elementum dolor, eu viverra diam dignissim nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum a diam id tortor volutpat tincidunt in non nisl. Nunc in neque non lorem malesuada lobortis malesuada vitae risus. Vivamus tincidunt ex sit amet felis condimentum, vel finibus est sodales. Nulla facilisi. Aenean a ligula velit. Cras ut hendrerit mauris. Curabitur quis arcu ornare, semper tortor a, dignissim elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

Quisque non eleifend justo, vitae lacinia leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam interdum, nibh id ornare pharetra, velit libero consectetur mauris, posuere aliquam risus libero vel est. Vivamus consequat erat eu purus porttitor auctor. Donec urna ipsum, consequat id ultricies vitae, blandit ac nunc. Aenean volutpat metus id sapien dictum, id auctor lectus pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ultricies ligula vitae odio sodales, sit amet eleifend leo sagittis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam dui eu tempus vulputate. Sed quis nulla ac ipsum congue sagittis a ac mi. Duis iaculis tortor lacus, in molestie mauris blandit vel. Vestibulum pharetra, nisi sed pretium rhoncus, erat justo posuere metus, sed interdum nunc justo nec metus. Cras suscipit interdum neque. Quisque sodales ipsum sed tortor mattis tincidunt. Donec auctor posuere justo, et sagittis lorem pellentesque in. Nam vestibulum urna ac nisi faucibus viverra. Maecenas molestie ligula sed nisi volutpat malesuada. Pellentesque iaculis tellus quis venenatis placerat. Mauris auctor, est placerat euismod malesuada, mi ex feugiat mauris, a euismod nulla orci vitae libero. Fusce volutpat felis quis accumsan blandit. Nullam ut finibus nibh, vel cursus felis. Nunc congue ultrices ligula, vitae aliquet ex feugiat eget. Vivamus viverra, lectus vel imperdiet vulputate, neque ante pretium metus, eu scelerisque est neque cursus diam.

Aenean dictum enim non cursus condimentum. Pellentesque dignissim turpis eu lorem accumsan, eget laoreet elit accumsan. Integer fringilla varius neque in accumsan. Donec tincidunt mauris nunc, a convallis lacus pellentesque sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed condimentum malesuada ante, faucibus vehicula massa efficitur quis. Duis bibendum lectus nibh, in ultrices libero pulvinar nec. Nulla facilisi. Vestibulum et felis quis libero tristique auctor. Aliquam erat volutpat. Vestibulum bibendum enim ut nunc ultricies, quis faucibus arcu semper.

Donec volutpat orci vitae lorem condimentum ullamcorper. Phasellus rhoncus blandit arcu, non dapibus nunc ultrices sed. Proin id ornare quam, venenatis tincidunt nisi. Proin porta pulvinar pharetra. Nam ultrices porta enim at rutrum. Curabitur at imperdiet mi. In vestibulum, nisl sed pretium aliquam, mauris diam viverra metus, eu dignissim metus urna vitae nibh.

Donec euismod commodo quam ac convallis. Duis vitae purus dapibus, porttitor quam vel, aliquam massa. Sed mattis elementum dolor, eu viverra diam dignissim nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum a diam id tortor volutpat tincidunt in non nisl. Nunc in neque non lorem malesuada lobortis malesuada vitae risus. Vivamus tincidunt ex sit amet felis condimentum, vel finibus est sodales. Nulla facilisi. Aenean a ligula velit. Cras ut hendrerit mauris. Curabitur quis arcu ornare, semper tortor a, dignissim elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

Quisque non eleifend justo, vitae lacinia leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam interdum, nibh id ornare pharetra, velit libero consectetur mauris, posuere aliquam risus libero vel est. Vivamus consequat erat eu purus porttitor auctor. Donec urna ipsum, consequat id ultricies vitae, blandit ac nunc. Aenean volutpat metus id sapien dictum, id auctor lectus pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ultricies ligula vitae odio sodales, sit amet eleifend leo sagittis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam dui eu tempus vulputate. Sed quis nulla ac ipsum congue sagittis a ac mi. Duis iaculis tortor lacus, in molestie mauris blandit vel. Vestibulum pharetra, nisi sed pretium rhoncus, erat justo posuere metus, sed interdum nunc justo nec metus. Cras suscipit interdum neque. Quisque sodales ipsum sed tortor mattis tincidunt. Donec auctor posuere justo, et sagittis lorem pellentesque in. Nam vestibulum urna ac nisi faucibus viverra. Maecenas molestie ligula sed nisi volutpat malesuada. Pellentesque iaculis tellus quis venenatis placerat. Mauris auctor, est placerat euismod malesuada, mi ex feugiat mauris, a euismod nulla orci vitae libero. Fusce volutpat felis quis accumsan blandit. Nullam ut finibus nibh, vel cursus felis. Nunc congue ultrices ligula, vitae aliquet ex feugiat eget. Vivamus viverra, lectus vel imperdiet vulputate, neque ante pretium metus, eu scelerisque est neque cursus diam.

Aenean dictum enim non cursus condimentum. Pellentesque dignissim turpis eu lorem accumsan, eget laoreet elit accumsan. Integer fringilla varius neque in accumsan. Donec tincidunt mauris nunc, a convallis lacus pellentesque sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed condimentum malesuada ante, faucibus vehicula massa efficitur quis. Duis bibendum lectus nibh, in ultrices libero pulvinar nec. Nulla facilisi. Vestibulum et felis quis libero tristique auctor. Aliquam erat volutpat. Vestibulum bibendum enim ut nunc ultricies, quis faucibus arcu semper.

Donec volutpat orci vitae lorem condimentum ullamcorper. Phasellus rhoncus blandit arcu, non dapibus nunc ultrices sed. Proin id ornare quam, venenatis tincidunt nisi. Proin porta pulvinar pharetra. Nam ultrices porta enim at rutrum. Curabitur at imperdiet mi. In vestibulum, nisl sed pretium aliquam, mauris diam viverra metus, eu dignissim metus urna vitae nibh.

Donec euismod commodo quam ac convallis. Duis vitae purus dapibus, porttitor quam vel, aliquam massa. Sed mattis elementum dolor, eu viverra diam dignissim nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum a diam id tortor volutpat tincidunt in non nisl. Nunc in neque non lorem malesuada lobortis malesuada vitae risus. Vivamus tincidunt ex sit amet felis condimentum, vel finibus est sodales. Nulla facilisi. Aenean a ligula velit. Cras ut hendrerit mauris. Curabitur quis arcu ornare, semper tortor a, dignissim elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

Quisque non eleifend justo, vitae lacinia leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam interdum, nibh id ornare pharetra, velit libero consectetur mauris, posuere aliquam risus libero vel est. Vivamus consequat erat eu purus porttitor auctor. Donec urna ipsum, consequat id ultricies vitae, blandit ac nunc. Aenean volutpat metus id sapien dictum, id auctor lectus pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ultricies ligula vitae odio sodales, sit amet eleifend leo sagittis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam dui eu tempus vulputate. Sed quis nulla ac ipsum congue sagittis a ac mi. Duis iaculis tortor lacus, in molestie mauris blandit vel. Vestibulum pharetra, nisi sed pretium rhoncus, erat justo posuere metus, sed interdum nunc justo nec metus. Cras suscipit interdum neque. Quisque sodales ipsum sed tortor mattis tincidunt. Donec auctor posuere justo, et sagittis lorem pellentesque in. Nam vestibulum urna ac nisi faucibus viverra. Maecenas molestie ligula sed nisi volutpat malesuada. Pellentesque iaculis tellus quis venenatis placerat. Mauris auctor, est placerat euismod malesuada, mi ex feugiat mauris, a euismod nulla orci vitae libero. Fusce volutpat felis quis accumsan blandit. Nullam ut finibus nibh, vel cursus felis. Nunc congue ultrices ligula, vitae aliquet ex feugiat eget. Vivamus viverra, lectus vel imperdiet vulputate, neque ante pretium metus, eu scelerisque est neque cursus diam.

Aenean dictum enim non cursus condimentum. Pellentesque dignissim turpis eu lorem accumsan, eget laoreet elit accumsan. Integer fringilla varius neque in accumsan. Donec tincidunt mauris nunc, a convallis lacus pellentesque sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed condimentum malesuada ante, faucibus vehicula massa efficitur quis. Duis bibendum lectus nibh, in ultrices libero pulvinar nec. Nulla facilisi. Vestibulum et felis quis libero tristique auctor. Aliquam erat volutpat. Vestibulum bibendum enim ut nunc ultricies, quis faucibus arcu semper.

Donec volutpat orci vitae lorem condimentum ullamcorper. Phasellus rhoncus blandit arcu, non dapibus nunc ultrices sed. Proin id ornare quam, venenatis tincidunt nisi. Proin porta pulvinar pharetra. Nam ultrices porta enim at rutrum. Curabitur at imperdiet mi. In vestibulum, nisl sed pretium aliquam, mauris diam viverra metus, eu dignissim metus urna vitae nibh.

Donec euismod commodo quam ac convallis. Duis vitae purus dapibus, porttitor quam vel, aliquam massa. Sed mattis elementum dolor, eu viverra diam dignissim nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum a diam id tortor volutpat tincidunt in non nisl. Nunc in neque non lorem malesuada lobortis malesuada vitae risus. Vivamus tincidunt ex sit amet felis condimentum, vel finibus est sodales. Nulla facilisi. Aenean a ligula velit. Cras ut hendrerit mauris. Curabitur quis arcu ornare, semper tortor a, dignissim elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

Quisque non eleifend justo, vitae lacinia leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam interdum, nibh id ornare pharetra, velit libero consectetur mauris, posuere aliquam risus libero vel est. Vivamus consequat erat eu purus porttitor auctor. Donec urna ipsum, consequat id ultricies vitae, blandit ac nunc. Aenean volutpat metus id sapien dictum, id auctor lectus pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ultricies ligula vitae odio sodales, sit amet eleifend leo sagittis.
 */