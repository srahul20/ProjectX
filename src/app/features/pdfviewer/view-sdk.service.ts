/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/
declare global {
  interface Window {
    AdobeDC: any;
  }
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigureService } from 'src/app/build-config/configure.service';

@Injectable({
  providedIn: 'root'
})
export class ViewSDKClient {

  reqisterCallBack(name: string) {
    const profile = {
      userProfile: {
        name: name
      }
    };

    this.adobeDCView.registerCallback(
      window.AdobeDC.View.Enum.CallbackType.GET_USER_PROFILE_API,
      function () {
        return new Promise((resolve, reject) => {
          resolve({
            code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: profile
          });
        });
      }
    );
  }
  constructor(private http: HttpClient) { }
  readyPromise: Promise<any> = new Promise((resolve) => {
    if (window.AdobeDC) {

      resolve(true);

    } else {
      /* Wait for Adobe Document Services PDF Embed API to be ready */
      document.addEventListener('adobe_dc_view_sdk.ready', () => {

        resolve(true);

      });
    }
  });
  adobeDCView: any;

  ready() {

    return this.readyPromise;
  }

  previewFile(divId: string, viewerConfig: any, pdfUrl: string, readOnly: boolean, pdfName: string) {

    const config: any = {
      /* Pass your registered client id */
      clientId: 'd9484058edcd4727bcc3e3d1a3020f56',
      domain:'www.test.com'
    };
    if (divId) { /* Optional only for Light Box embed mode */
      /* Pass the div id in which PDF should be rendered */
      config.divId = divId;
    }
    /* Initialize the AdobeDC View object */
    this.adobeDCView = new window.AdobeDC.View(config);

    /* Invoke the file preview API on Adobe DC View object */
    var previewFilePromise = null;

    if (!readOnly) {
      previewFilePromise = this.adobeDCView.previewFile({
        /* Pass information on how to access the file */
        content: {
          /* Location of file where it is hosted */
          location: {
            url: pdfUrl,
            /*
            If the file URL requires some additional headers, then it can be passed as follows:-
            headers: [
                {
                    key: '<HEADER_KEY>',
                    value: '<HEADER_VALUE>',
                }
            ]
            */
          },
        },
        /* Pass meta data of file */
        metaData: {
          /* file name */
          fileName: pdfName,
          /* file ID */
          // id: '6d07d124-ac85-43b3-a867-36930f502ac6',
        }
      }, viewerConfig);
    }
    else {
      previewFilePromise = this.adobeDCView.previewFile({
        content: {
          location:
            { url: pdfUrl }
        },
        metaData: { fileName: pdfName }
      },
        { showAnnotationTools: false });
    }
    return previewFilePromise;
  }

  previewFileUsingFilePromise(divId: string, filePromise: Promise<string | ArrayBuffer>, fileName: any) {
    /* Initialize the AdobeDC View object */
    this.adobeDCView = new window.AdobeDC.View({
      /* Pass your registered client id */
      clientId: 'd9484058edcd4727bcc3e3d1a3020f56',
      /* Pass the div id in which PDF should be rendered */
      divId,
    });

    /* Invoke the file preview API on Adobe DC View object */
    this.adobeDCView.previewFile({
      /* Pass information on how to access the file */
      content: {
        /* pass file promise which resolve to arrayBuffer */
        promise: filePromise,
      },
      /* Pass meta data of file */
      metaData: {
        /* file name */
        fileName: ''
      }
    }, {});
  }


  registerSaveApiHandler(uploadUrl: string) {
    /* Define Save API Handler */
    const saveApiHandler = (metaData: any, content: any, options: any) => {
      console.log(metaData, content, options, uploadUrl);
      return new Promise((resolve) => {
        const headerDict = {
          'Content-Type': 'application/pdf'
        }

        const requestOptions = {
          headers: new HttpHeaders(headerDict),
        };
        const buffer: ArrayBuffer = content.buffer;
        const uploadurl = uploadUrl;
        this.http.put(uploadurl, buffer, requestOptions).subscribe(() => {

          const response = {
            code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: {
              metaData: Object.assign(metaData, { updatedAt: new Date().getTime() })
            },
          };
          resolve(response);
        })
      });
    };

    this.adobeDCView.registerCallback(
      window.AdobeDC.View.Enum.CallbackType.SAVE_API,
      saveApiHandler,
      {}
    );
  }

  registerEventsHandler() {
    /* Register the callback to receive the events */
    const profile = {
      userProfile: {
        name: 'Rahul',
        firstName: '',
        lastName: '',
        email: ''
      }
    };

    this.adobeDCView.registerCallback(
      window.AdobeDC.View.Enum.CallbackType.GET_USER_PROFILE_API,
      function () {
        return new Promise((resolve, reject) => {
          resolve({
            code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: profile
          });
        });
      }
    );



    this.adobeDCView.registerCallback(
      /* Type of call back */
      window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
      /* call back function */
      (event: any) => {
        console.log(event);
      },
      /* options to control the callback execution */
      {
        /* Enable PDF analytics events on user interaction. */
        enablePDFAnalytics: true,
      }
    );
  }
}

