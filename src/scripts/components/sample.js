;(function($, window, document, undefined) {

  'use strict';

  /**
   * This is a description for MyNamespace object.
   *
   * @namespace MyNamespace
   * @author Ultron
   */

  let MyNamespace = {

    /**
     * Initialize object
     * @function init
     * @memberof MyNamespace
     */

    init() {

      this._cache();
      this._events();

    }, // init()

    /**
     * Cache reusable data
     * @function cache
     * @memberof MyNamespace
     */

    _cache() {

      this.$win = $(window);
      this.$html = $('html');

    }, // _cache()

    /**
     * Attach event listeners
     * @function _events
     * @memberof MyNamespace
     */

    _events() {

      this.$html.on(
        'click.ui.some_namespace',
        '.js-trigger',
        event => this._myClickHandler(event)
      );

      this.$win.on(
        'resize.ui.some_namespace',
        event => this._myResizeHandler(event)
      );

    }, // _events()

    /**
     * Handle click event
     * @function _myClickHandler
     * @memberof MyNamespace
     */

    _myClickHandler() {
      console.log('Click handler');
    }, // _myClickHandler()

    /**
     * Handle `window` resize event
     * @function _myResizeHandler
     * @memberof MyNamespace
     */

    _myResizeHandler() {
      console.log('Resize handler');
    }, // _myResizeHandler()

  }; // MyNamespace

  MyNamespace.init();

})(jQuery, window, document);
