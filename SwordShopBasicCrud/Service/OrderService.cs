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
    public class OrderService: BaseService<Order>
    {
        public OrderService(StoreContext context) : base(context)
        {
        }

        public override async Task<IList<Order>> GetAllAsync()
        {
            return await _context.Set<Order>()
                .AsQueryable()
                .Include(x => x.Client)
                .ToListAsync();
        }
    }
}
