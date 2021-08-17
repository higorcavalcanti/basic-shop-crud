using Microsoft.AspNetCore.Mvc;
using SwordShopBasicCrud.Exceptions;
using SwordShopBasicCrud.Models;
using SwordShopBasicCrud.Responses;
using SwordShopBasicCrud.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwordShopBasicCrud.Controllers
{
    public class ClientController : BaseController<Client>
    {
        protected new ClientService _service;
        public ClientController(ClientService service) : base(service)
        {
            _service = service;
        }

        public override async Task<ActionResult<Response<Client>>> Add(Client entity)
        {
            if ( !await _service.ValidateEmail(entity.Email) )
            {
                throw new CustomException("Email já em uso!");
            }

            return await base.Add(entity);
        }
    }
}
