using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModuleImages
{
    public sealed class Images
    {
        public string[] getImagesList()
        {
            string path = "Assets";
            string[] filePaths = Directory.GetFiles(path, "*.png");
            return filePaths;
        }
    }
}
