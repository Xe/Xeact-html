{ pkgs ? import <nixpkgs> { }}:

pkgs.stdenv.mkDerivation rec {
  name = "Xeact-html";
  version = "latest";
  src = ./.;
  buildInputs = with pkgs; [ nodejs nodePackages.uglify-js ];
  phases = "installPhase";
  installPhase = ''
    mkdir -p $out/static/js

    node $src/gen.js > xeact-html.js
    uglifyjs xeact-html.js -c -m > $out/static/js/xeact-html.min.js
    sed -i 's/xeact.js/xeact.min.js/' $out/static/js/xeact-html.min.js
  '';
}
