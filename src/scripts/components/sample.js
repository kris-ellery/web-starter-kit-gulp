(($, window, document) => {
  /**
   * This is a description for Module object.
   *
   * @namespace Module
   * @author Ultron
   */

  const Module = {

    /**
     * Initialize object
     * @function init
     * @memberof Module
     */

    init() {
      this.cache();
      this.events();
    },

    /**
     * Cache reusable data
     * @function cache
     * @memberof Module
     */

    cache() {
      this.$win = $(window);
      this.$doc = $(document);
    },

    /**
     * Attach event listeners
     * @function events
     * @memberof Module
     */

    events() {
      this.$doc.on(
        'click.ui.custom_namespace',
        '.js-trigger',
        event => this.myClickHandler(event),
      );

      this.$doc.on(
        'resize.ui.custom_namespace',
        event => this.myResizeHandler(event),
      );
    },

    /**
     * Handle click event
     * @function myClickHandler
     * @memberof Module
     */

    myClickHandler() {
      console.log('Click handler'); // eslint-disable-line
    },

    /**
     * Handle `window` resize event
     * @function myResizeHandler
     * @memberof Module
     */

    myResizeHandler() {
      console.log('Resize handler'); // eslint-disable-line
    },
  };

  Module.init();
})(jQuery, window, document);
