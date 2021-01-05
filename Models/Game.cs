using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Game
    {
        public string GameID { get; set; }

        public string GameTitle { get; set; }

        [DataType(DataType.Date)]
        public DateTime Date { get; set; }

        public string Location { get; set; }

        public Hole[] Holes;

        public Player[] Players;
    }
}
