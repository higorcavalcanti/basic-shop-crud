using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwordShopBasicCrud.Models
{
    public class Order : BaseModel
    {
        public DateTime Date { get; set; }
        public decimal Value { get; set; }
        public decimal Discount { get; set; }
        public decimal Total { get; set; }

        public long ClientId { get; set; }
        public virtual Client Client { get; set; }

        public virtual IList<Product> Products { get; set; }
    }
}
