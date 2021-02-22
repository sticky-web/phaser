
var Vector2 = require('../../math/Vector2');

/**
 * Converts from isometric tile Y coordinates (tile units) to world Y coordinates (pixels), factoring in the
 * layer's position, scale and scroll.
 *
 * @function Phaser.Tilemaps.Components.IsometricTileToWorldY
 * @since 3.50.0
 *
 * @param {number} tileX - The x coordinate, in tiles, not pixels.
 * @param {number} tileY - The y coordinate, in tiles, not pixels.
 * @param {Phaser.Tilemaps.LayerData} layer - The Tilemap Layer to act upon.
 *
 * @return {number} The Y location in world coordinates.
 */

var IsometricTileToWorldXY = require('./IsometricTileToWorldXY');

var IsometricTileToWorldY = function (tileX, tileY, camera, layer)
{
    var point = new Vector2();
    return IsometricTileToWorldXY(tileX, tileY, point, camera, layer).y;
};

module.exports = IsometricTileToWorldY;
