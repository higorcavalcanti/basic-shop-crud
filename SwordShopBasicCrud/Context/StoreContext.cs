using Microsoft.EntityFrameworkCore;
using SwordShopBasicCrud.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;


namespace SwordShopBasicCrud.Context
{
    public class StoreContext : DbContext
    {
        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Order> Orders { get; set; }

        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }
    }
}
