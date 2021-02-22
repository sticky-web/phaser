
var IsometricTileToWorldXY = require('./IsometricTileToWorldXY');

var IsometricTileToWorldY = function (tileX, tileY, point, camera, layer)
{
    return IsometricTileToWorldXY(tileX, tileY, point, camera, layer).y;
};

module.exports = IsometricTileToWorldY;
