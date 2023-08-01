using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace API_Admin_Panel.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Contract()
        {
            return View();
        }

        public ActionResult Integration()
        {
            return View();
        }
    }
}