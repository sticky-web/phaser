
var Vector2 = require('../../math/Vector2');

/**
 * Converts from isometric tile X coordinates (tile units) to world X coordinates (pixels), factoring in the
 * layer's position, scale and scroll.
 *
 * @function Phaser.Tilemaps.Components.IsometricTileToWorldX
 * @since 3.50.0
 *
 * @param {number} tileX - The x coordinate, in tiles, not pixels.
 * @param {number} tileY - The y coordinate, in tiles, not pixels.
  * @param {Phaser.Tilemaps.LayerData} layer - The Tilemap Layer to act upon.
 *
 * @return {number} The X location in world coordinates.
 */

var IsometricTileToWorldXY = require('./IsometricTileToWorldXY');

var IsometricTileToWorldX = function (tileX, tileY, layer)
{
    var point = new Vector2();
    var camera = null;
    return IsometricTileToWorldXY(tileX, tileY, point, camera, layer).x;
};

module.exports = IsometricTileToWorldX;
