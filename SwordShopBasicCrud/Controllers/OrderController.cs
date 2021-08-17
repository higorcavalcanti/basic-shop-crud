using Microsoft.AspNetCore.Mvc;
using SwordShopBasicCrud.Models;
using SwordShopBasicCrud.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwordShopBasicCrud.Controllers
{
    public class OrderController : BaseController<Order>
    {
        public OrderController(BaseService<Order> service) : base(service)
        {

        }
    }
}
