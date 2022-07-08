using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.Devices.Enumeration;
using Windows.Foundation;

namespace ModulePrinters
{
    public sealed class Printer
    {
        public string name { get; set; }
        public string id { get; set; }
    }
    public sealed class Printers
    {

        public IAsyncOperation<IEnumerable<Printer>> ListPrinters()
        {

            return ListPrintersAsync().AsAsyncOperation();

        }

        private async Task<IEnumerable<Printer>> ListPrintersAsync()
        {
            string printerInterfaceClass = "{0ecef634-6ef0-472a-8085-5ad023ecbccd}";
            string selector = "System.Devices.InterfaceClassGuid:=\"" + printerInterfaceClass + "\"";
            string containerIdField = "System.Devices.ContainerId";
            string[] propertiesToRetrieve = new string[] { containerIdField };
            DeviceInformationCollection deviceInfoCollection = await DeviceInformation.FindAllAsync(selector, propertiesToRetrieve);
            List<Printer> printers = new List<Printer>();
            
            await Task.Run(() => {
                for (int i = 0; i < deviceInfoCollection.Count; i++)
                {
                    DeviceInformation deviceInfo = deviceInfoCollection[i];
                    printers.Add(new Printer() { name = deviceInfo.Name, id= $"P00{i}" });
                }
            });
           return printers;
         
        }
    }
}
