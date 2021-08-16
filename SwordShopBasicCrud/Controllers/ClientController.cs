using Microsoft.AspNetCore.Mvc;
using SwordShopBasicCrud.Models;
using SwordShopBasicCrud.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwordShopBasicCrud.Controllers
{
    public class ClientController : BaseController<Client>
    {
        public ClientController(BaseService<Client> service) : base(service)
        {

        }
    }
}
