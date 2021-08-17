using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SwordShopBasicCrud.Context;
using SwordShopBasicCrud.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwordShopBasicCrud.Service
{
    public class ClientService: BaseService<Client>
    {
        public ClientService(StoreContext context) : base(context)
        {
        }

        public async Task<bool> ValidateEmail(string email)
        {
            var exists = await _context.Set<Client>()
                .AsQueryable()
                .Where(x => x.Email == email)
                .AnyAsync();

            return !exists;
        }
    }
}
