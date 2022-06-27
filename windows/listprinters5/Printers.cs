using System;
using System.IO;
using Microsoft.ReactNative.Managed;
using Windows.Devices.Enumeration;
using Windows.Security.ExchangeActiveSyncProvisioning;


namespace listprinters5
{
    public class DataPrinters
    {
        public static string[] ImagesList()
        {
            string path = "Assets";
            
            string[] filePaths = Directory.GetFiles(path, "*.png");
            return filePaths;
        }
        public string directory { get; set; }
        public string[] content { get; set; }
       
    }

   

    [ReactModule]
    class Printers
    {


        [ReactMethod("getList")]
        public async void ListAsync(IReactPromise<string[]> promise)
        {
            try
            {
                string printerInterfaceClass = "{0ecef634-6ef0-472a-8085-5ad023ecbccd}";
                string selector = "System.Devices.InterfaceClassGuid:=\"" + printerInterfaceClass + "\"";
                string containerIdField = "System.Devices.ContainerId";
                string[] propertiesToRetrieve = new string[] { containerIdField };
                DeviceInformationCollection deviceInfoCollection = await DeviceInformation.FindAllAsync(selector, propertiesToRetrieve);

                string[] printersList = new string[deviceInfoCollection.Count];

                for (int i = 0; i < deviceInfoCollection.Count; i++)
                {
                    DeviceInformation deviceInfo = deviceInfoCollection[i];
                    printersList[i] = (string)deviceInfo.Name;
                }

                promise.Resolve(printersList);
            }
            catch (Exception e)
            {
                promise.Reject(new ReactError { Exception = e });
            }

        }

        [ReactMethod("getDeviceModel")]
        public string GetDeviceModel()
        {
            EasClientDeviceInformation info = new EasClientDeviceInformation();
            return info.SystemProductName;
        }

        [ReactMethod("getImages")]
        public DataPrinters GetImages()
        {

             var imagesURL = DataPrinters.ImagesList();
             DataPrinters dataPrinters  =  new DataPrinters() {  directory = Directory.GetCurrentDirectory(), content = imagesURL };
             return dataPrinters;

        }
    }
}
