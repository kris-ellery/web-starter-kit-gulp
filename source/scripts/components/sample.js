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

      this.cache();
      this.bind();

    }, // init()

    /**
     * Cache reusable data
     * @function cache
     * @memberof MyNamespace
     */

    cache: function() {

      this.$win = $(window);
      this.$html = $('html');

    }, // cache()

    /**
     * Attach event listeners
     * @function bind
     * @memberof MyNamespace
     */

    bind: function() {

      var _this = this;

      _this.$html.on('click.ui.some_namespace', '.js-trigger', _this.myClickHandler);
      _this.$win.on('resize.ui.some_namespace', _this.myResizeHandler);

    }, // bind()

    /**
     * Handle click event
     * @function myClickHandler
     * @memberof MyNamespace
     */

    myClickHandler: function() {

    }, // myClickHandler()

    /**
     * Handle `window` resize event
     * @function myResizeHandler
     * @memberof MyNamespace
     */

    myResizeHandler: function() {

    } // myResizeHandler()

  }; // MyNamespace

  MyNamespace.init();

})(jQuery, window, document);
