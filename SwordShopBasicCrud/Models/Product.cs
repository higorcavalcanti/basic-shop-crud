using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwordShopBasicCrud.Models
{
    public class Product : BaseModel
    {
        public string Description { get; set; }
        public decimal Value { get; set; }
        
    }
}
