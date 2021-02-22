/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require('../const/ORIENTATION_CONST');
var NOOP = require('../../utils/NOOP');
var TileToWorldX = require('./TileToWorldX');
var IsometricTileToWorldX = require('./IsometricTileToWorldX');

/**
 * Gets the correct function to use to translate tiles, based on the map orientation.
 *
 * @function Phaser.Tilemaps.Components.GetTileToWorldXFunction
 * @since 3.50.0
 *
 * @param {number} orientation - The Tilemap orientation constant.
 *
 * @return {function} The function to use to translate tiles for the given map type.
 */
var GetTileToWorldXFunction = function (orientation)
{
    if (orientation === CONST.ORTHOGONAL)
    {
        return TileToWorldX;
    }
    else if (orientation === CONST.ISOMETRIC)
    {
        return IsometricTileToWorldX;
    }
    else
    {
        return NOOP;
    }
};

module.exports = GetTileToWorldXFunction;
