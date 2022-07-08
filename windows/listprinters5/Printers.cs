using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using Microsoft.ReactNative.Managed;
using Windows.Devices.Enumeration;
using Windows.Security.ExchangeActiveSyncProvisioning;


namespace listprinters5
{
    public class DataPrinters
    {
        public string directory { get; set; }
        public string[] content { get; set; }  
    }

   

    [ReactModule]
    class Printers
    {


        [ReactMethod("getList")]
        public async void ListAsync(IReactPromise<List<ModulePrinters.Printer>> promise)
        {
            try
            {
               
                var printers = new ModulePrinters.Printers();
                var printerList = await printers.ListPrinters();
                promise.Resolve((List<ModulePrinters.Printer>)printerList);

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
             var images = new ModuleImages.Images();
             var imagesList = images.getImagesList();
             DataPrinters dataPrinters  =  new DataPrinters() {  directory = Directory.GetCurrentDirectory(), content = imagesList };
             return dataPrinters;

        }
    }
}
