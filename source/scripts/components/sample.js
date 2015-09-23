;(function($, window, document, undefined) {

  'use strict';

  /**
   * This is the description for my namespace object.
   *
   * @namespace MyNamespace
   * @author Ultron
   */

  var MyNamespace = {

    /**
     * Initialize namespace object
     * @function init
     * @memberof MyNamespace
     */

    init: function() {

      this._cache();
      this._events();

    }, // init()

    /**
     * Cache reusable data
     * @function cache
     * @memberof MyNamespace
     */

    _cache: function() {

      this.$win = $(window);
      this.$html = $('html');

    }, // _cache()

    /**
     * Attach event listeners
     * @function bind
     * @memberof MyNamespace
     */

    _events: function() {

      var _this = this;

      _this.$html.on('click.ui.some_namespace', '.js-trigger', _this._myClickHandler);
      _this.$win.on('resize.ui.some_namespace', _this._myResizeHandler);

    }, // _events()

    /**
     * Handle click event
     * @function myClickHandler
     * @memberof MyNamespace
     */

    _myClickHandler: function() {

    }, // _myClickHandler()

    /**
     * Handle `window` resize event
     * @function myResizeHandler
     * @memberof MyNamespace
     */

    _myResizeHandler: function() {

    }, // _myResizeHandler()

  }; // MyNamespace

  MyNamespace.init();

})(jQuery, window, document);
