using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class Game
    {
        public string GameID { get; set; }

        public DateTime Date { get; set; }

        public string Location { get; set; }

        public Hole[] Holes;

        public Player[] Players;
    }
}
