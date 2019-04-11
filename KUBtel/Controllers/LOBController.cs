using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KUBTel.Controllers
{
    public class LOBController : Controller
    {
        public ActionResult Enterprise()
        {
            return View();
        }
        public ActionResult Telcos()
        {
            return View();
        }
        public ActionResult SiteOffice()
        {
            return View();
        }
    }
}
