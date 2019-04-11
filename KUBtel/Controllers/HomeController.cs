using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KUBtel.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult CheckPDF()
        {
            string path = Server.MapPath("~/Documents/Receipt.pdf");
            //return new EmptyResult();
            if (System.IO.File.Exists(path))
                return Json(new { IsValid = true }, JsonRequestBehavior.AllowGet);

            return Json(new { IsValid = false, ErrorMessage = "File is not available yet, please try again later." }, JsonRequestBehavior.AllowGet);
            //return Json(true, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GeneratePDF()
        {
            //string fullName = Path.Combine(GetBaseDir(), filePath, fileName);
            string fullName = Server.MapPath("~/Documents/Receipt.pdf");

            byte[] fileBytes = GetFile(fullName);
            return File(
                fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, "Receipt.pdf");
        }

        byte[] GetFile(string s)
        {
            System.IO.FileStream fs = System.IO.File.OpenRead(s);
            byte[] data = new byte[fs.Length];
            int br = fs.Read(data, 0, data.Length);
            if (br != fs.Length)
                throw new System.IO.IOException(s);
            return data;
        }
    }
}