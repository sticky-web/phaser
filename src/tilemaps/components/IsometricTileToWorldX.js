
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
 * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera to use when calculating the tile index from the world values.
 * @param {Phaser.Tilemaps.LayerData} layer - The Tilemap Layer to act upon.
 *
 * @return {number} The X location in world coordinates.
 */

var IsometricTileToWorldXY = require('./IsometricTileToWorldXY');

var IsometricTileToWorldX = function (tileX, tileY, camera, layer)
{
    var point = new Vector2(0, 0);
    return IsometricTileToWorldXY(tileX, tileY, point, camera, layer).x;
};

module.exports = IsometricTileToWorldX;
