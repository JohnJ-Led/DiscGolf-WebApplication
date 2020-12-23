using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class Hole
    {

        public int  HoleNbr { get; set; }

        public int DistanceM { get; set; }

        public int DistanceF => (int)(DistanceM * 3.28084);

        public int Par { get; set; }
    }
}
