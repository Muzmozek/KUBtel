using System.Web;
using System.Web.Optimization;

namespace KUBtel
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/JSGlobalCompulsory").Include(
                        "~/Scripts/JSGlobalCompulsory/jquery-{version}.js",
                        "~/Scripts/JSGlobalCompulsory/jquery-migrate-3.0",
                        //"~/Scripts/JSGlobalCompulsory/jquery.validate*",
                        "~/Scripts/JSGlobalCompulsory/jquery.easing.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/JSImplementingPlugins").Include(
                      "~/Scripts/JSImplementingPlugins/popper.js",
                      "~/Scripts/JSImplementingPlugins/bootstrap/bootstrap.js",
                      "~/Scripts/JSImplementingPlugins/bootstrap/offcanvas.js",
                      "~/Scripts/JSImplementingPlugins/revolution/jquery.themepunch.tools.js",
                      "~/Scripts/JSImplementingPlugins/revolution/jquery.themepunch.revolution.js",
                      "~/Scripts/JSImplementingPlugins/revolution/revolution.extension.actions.js",
                      "~/Scripts/JSImplementingPlugins/revolution/revolution.extension.carousel.js",
                      "~/Scripts/JSImplementingPlugins/revolution/revolution.extension.kenburn.js",
                      "~/Scripts/JSImplementingPlugins/revolution/revolution.extension.layeranimation.js",
                      "~/Scripts/JSImplementingPlugins/revolution/revolution.extension.migration.js",
                      "~/Scripts/JSImplementingPlugins/revolution/revolution.extension.navigation.js",
                      "~/Scripts/JSImplementingPlugins/revolution/revolution.extension.parallax.js",
                      "~/Scripts/JSImplementingPlugins/revolution/revolution.extension.slideanims.js",
                      //"~/Scripts/JSImplementingPlugins/revolution/revolution.extension.video.js",
                      "~/Scripts/JSImplementingPlugins/dzxparallaxer/dzsparallaxer.js",
                      "~/Scripts/JSImplementingPlugins/dzxparallaxer/plugin.js",
                      "~/Scripts/JSImplementingPlugins/dzxparallaxer/scroller.js",
                      "~/Scripts/JSImplementingPlugins/fancybox-3.0.47/jquery.fancybox.js",
                      "~/Scripts/JSImplementingPlugins/respond/respond.js",
                      "~/Scripts/JSImplementingPlugins/masonry.pkgd.js",
                      "~/Scripts/JSImplementingPlugins/imagesloaded.pkgd.js",
                      "~/Content/CSSImplementingPlugins/slick/slick.js",
                      "~/Scripts/JSImplementingPlugins/hs.core.js",
                      "~/Scripts/JSImplementingPlugins/hs.header.js",
                      "~/Scripts/JSImplementingPlugins/hs.popup.js",
                      "~/Scripts/JSImplementingPlugins/hs.carousel.js",
                      "~/Scripts/JSImplementingPlugins/hs.go-to.js",
                      "~/Scripts/JSImplementingPlugins/hs.dropdown.js",
                      //"~/Scripts/JSImplementingPlugins/hs.smart-menu.js",
                      "~/Scripts/JSImplementingPlugins/hs.hamburgers.js",
                      "~/Scripts/JSImplementingPlugins/gmaps.js",
                      "~/Scripts/JSImplementingPlugins/hs.map.js",
                      //"~/Scripts/JSImplementingPlugins/blog-masonry.js",
                      "~/Scripts/JSImplementingPlugins/masterslider.js",
                      "~/Scripts/JSImplementingPlugins/hs.scroll-nav.js",
                      "~/Scripts/JSImplementingPlugins/appear.js",
                      "~/Scripts/JSImplementingPlugins/hs.megamenu.js",
                      "~/Scripts/JSImplementingPlugins/datepicker/datepicker.js",
                      "~/Scripts/JSImplementingPlugins/datepicker/hs.datepicker.js"
                      //"~/Scripts/JSImplementingPlugins/materialize.js",
                      //"~/Scripts/JSImplementingPlugins/TweenMax.js"
                      //"~/Scripts/JSImplementingPlugins/home.js"
                      ));
            bundles.Add(new ScriptBundle("~/bundles/JSPages").Include(
                      "~/Scripts/JSPages/Initialization.js"
                ));
            bundles.Add(new StyleBundle("~/bundles/CSSCompulsory").Include(
                      "~/Content/CSSGlobalCompulsory/bootstrap.css",
                      "~/Content/CSSGlobalCompulsory/offcanvas.css"
                      ));

            bundles.Add(new StyleBundle("~/bundles/CSSImplementation").Include(
                      //"~/Content/CSSImplementingPlugins/icon-hs/style.css",
                      //"~/Content/CSSImplementingPlugins/icon-awesome/css/font-awesome.css",
                      "~/Content/CSSImplementingPlugins/icon-etlinefont/style.css",
                      // "~/Content/CSSImplementingPlugins/icon-line/css/simple-line-icons.css",
                      "~/Content/CSSImplementingPlugins/dzsparallaxer/dzsparallaxer.css",
                      "~/Content/CSSImplementingPlugins/dzsparallaxer/scroller.css",
                      "~/Content/CSSImplementingPlugins/dzsparallaxer/plugin.css",
                      "~/Content/CSSImplementingPlugins/hamburgers.css",
                      "~/Content/CSSImplementingPlugins/hs.megamenu.css",
                      "~/Content/CSSImplementingPlugins/jquery.fancybox.css",
                      "~/Content/CSSImplementingPlugins/Site.css",
                      "~/Content/CSSImplementingPlugins/animate.css",
                      "~/Content/CSSImplementingPlugins/slick/slick.css",
                      "~/Content/CSSImplementingPlugins/jquery.fancybox.css",
                      "~/Content/CSSImplementingPlugins/unify/unify.css",
                      "~/Content/CSSImplementingPlugins/unify/unify-components.css",
                      "~/Content/CSSImplementingPlugins/unify/unify-core.css",
                      "~/Content/CSSImplementingPlugins/unify/unify-globals.css",
                      "~/Content/CSSImplementingPlugins/revolution-slider/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css",
                      "~/Content/CSSImplementingPlugins/revolution-slider/settings.css",
                      "~/Content/CSSImplementingPlugins/revolution-slider/layers.css",
                      "~/Content/CSSImplementingPlugins/revolution-slider/navigation.css",
                      //"~/Content/CSSImplementingPlugins/blog_masonry_3col.css",
                      //"~/Content/CSSImplementingPlugins/materialize.css",
                      "~/Content/CSSImplementingPlugins/Final.css",
                      "~/Content/CSSImplementingPlugins/masterslider.main.css",
                      //"~/Content/CSSImplementingPlugins/normalize.css",
                      "~/Content/CSSImplementingPlugins/styles.op-business.css",
                      "~/Content/CSSImplementingPlugins/custom.css"
                      //"~/Content/CSSImplementingPlugins/jquery-ui.css"
                      ));
        }
    }
}
