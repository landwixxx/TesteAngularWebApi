using AspNetWebApi.Context;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations.Model;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AspNetWebApi.Models;
using System.Configuration;

namespace AspNetWebApi.Controllers
{
    public class PedidosController : ApiController
    {
        public class NovoPedido
        {
            public long IdCliente { get; set; }

            public DateTime Data { get; set; }

            public List<ItemPedido> Items { get; set; }

            public double Valor { get; set; }

            public double Desconto { get; set; }

            public double ValorTotal { get; set; }
        }

        public class Pedido
        {
            public long Id { get; set; }

            public long IdCliente { get; set; }

            public DateTime Data { get; set; }

            public double Valor { get; set; }

            public double Desconto { get; set; }

            public double ValorTotal { get; set; }
        }

        [HttpGet]
        public List<Pedido> Get()
        {
            using (var contexto = new Contexto())
            {
                var pedidosModelo = contexto.Pedidos.ToList();
                var pedidosProxy = new List<Pedido>();

                foreach (var pedidoModelo in pedidosModelo)
                {
                    var pedidoProxy = new Pedido()
                    {
                       Id = pedidoModelo.Id,
                       IdCliente = pedidoModelo.IdCliente,
                       Data = pedidoModelo.Data,
                       Valor = pedidoModelo.Valor,
                       Desconto = pedidoModelo.Desconto,
                       ValorTotal = pedidoModelo.ValorTotal
                    };

                    pedidosProxy.Add(pedidoProxy);
                }

                return pedidosProxy;
            }
        }
           

        [HttpPost]
        public void Post(NovoPedido novoPedido)
        {
            using (var contexto = new Contexto())
            {
                var listaDeItems = novoPedido.Items;

                foreach (ItemPedido item in listaDeItems)
                {
                    var novoItem = new Models.ItemPedido()
                    {
                        IdProduto = item.IdProduto,
                        Valor = item.Valor,
                        IdPedido = item.IdPedido
                    };

                    contexto.ItemsPedidos.Add(novoItem);
                    contexto.SaveChanges();
                }
            }

            using (var contexto = new Contexto())
            {
                var pedidoModelo = new Models.Pedido()
                {
                    IdCliente = novoPedido.IdCliente,
                    Data = novoPedido.Data,
                    Desconto = novoPedido.Desconto,
                    Valor = novoPedido.Valor,
                    ValorTotal = novoPedido.ValorTotal

                };

                contexto.Pedidos.Add(pedidoModelo);
                contexto.SaveChanges();
            }
        }
    }
}
