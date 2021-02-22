/**
 * Converts from isometric tile XY coordinates (tile units) to world XY coordinates (pixels), factoring in the
 * layer's position, scale and scroll. This will return a new Vector2 object or update the given
 * `point` object.
 *
 * @function Phaser.Tilemaps.Components.IsometricTileToWorldXY
 * @since 3.50.0
 *
 * @param {number} tileX - The x coordinate, in tiles, not pixels.
 * @param {number} tileY - The y coordinate, in tiles, not pixels.
 * @param {Phaser.Math.Vector2} point - A Vector2 to store the coordinates in. If not given a new Vector2 is created.
 * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera to use when calculating the tile index from the world values.
 * @param {Phaser.Tilemaps.LayerData} layer - The Tilemap Layer to act upon.
 *
 * @return {Phaser.Math.Vector2} The XY location in world coordinates.
 */

var IsometricTileToWorldXY = require('./IsometricTileToWorldXY');

var IsometricTileToWorldX = function (tileX, tileY, point, camera, layer)
{
    return IsometricTileToWorldXY(tileX, tileY, point, camera, layer).x;
};

module.exports = IsometricTileToWorldX;
