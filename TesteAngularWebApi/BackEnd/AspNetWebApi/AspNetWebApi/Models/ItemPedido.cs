using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AspNetWebApi.Models
{
    [Table("ItemsPedidos")]
    public class ItemPedido : BaseModelo
    {
        [Required]
        public long IdPedido { get; set; }
        [Required]
        public long IdProduto { get; set; }
        
        [Required]
        public double Valor { get; set; }
    }

}