using AspNetWebApi.Context;
using AspNetWebApi.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AspNetWebApi.Controllers
{
    public class ClientesController : ApiController
    {
        public class Cliente
        {
            public long Id { get; set; }
            public string Nome { get; set; }

            public string Email { get; set; }

        }
              

        [HttpGet]
        public List<Cliente> Get()
        {
            using (var contexto = new Contexto())
            {
                var clientesModelo = contexto.Clientes.ToList();
                var clientesProxy = new List<Cliente>();

                foreach (var clienteModelo in clientesModelo)
                {
                    var clienteProxy = new Cliente()
                    {
                        Id = clienteModelo.Id,
                        Nome = clienteModelo.Nome,
                        Email = clienteModelo.Email
                    };

                    clientesProxy.Add(clienteProxy);
                }

                return clientesProxy;
            }
        }

        [HttpGet]
        public Cliente Get(long id)
        {
            using (var contexto = new Contexto())
            {
                var clienteModelo = contexto.Clientes
                    .Where(cliente => cliente.Id == id)
                    .Single();


                var contatoProxy = new Cliente()
                {
                    Id = clienteModelo.Id,
                    Nome = clienteModelo.Nome
                };

                return contatoProxy;
            }
        }

        public class NovoCliente
        {
            public string Nome { get; set; }
            public string Email { get; set; }
        }

        [HttpPost]
        public void Post(NovoCliente novoCliente)
        {
            using (var contexto = new Contexto())
            {
                var clienteModelo = new Models.Cliente()
                {

                    Nome = novoCliente.Nome,
                    Email = novoCliente.Email
                };

                contexto.Clientes.Add(clienteModelo);
                contexto.SaveChanges();
            }
        }

        public class Pedido {
            public long Id { get; set; }
            public double ValorTotal { get; set; }

            public string Data { get; set; }
        }
         
        [HttpGet]
        [Route("api/clientes/{id}/pedidos")]
        public List<Pedido> Pedidos(long id)
        {
            using (var contexto = new Contexto())
            {
                var pedidosProxy = new List<Pedido>();

                var pedidosClienteModelo = contexto.Pedidos;                    

                foreach (var pedidoModelo in pedidosClienteModelo)
                {
                    if (pedidoModelo.IdCliente == id)
                    {
                        var pedidoProxy = new Pedido()
                        {
                            Id = pedidoModelo.Id,
                            Data = pedidoModelo.Data.ToString(),
                            ValorTotal = pedidoModelo.ValorTotal
                        };
                        pedidosProxy.Add(pedidoProxy);
                    }                    
                }

                return pedidosProxy;
            }
        }

    }
}
