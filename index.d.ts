interface Parameter {
    authCode: string;
}
interface File {
    filename: string;
    mimeType: string;
    data: string;
}
interface ParamPersonlizedAttachments extends Parameter {
    files: Array<File>;
}
declare class Optivo {
    subscribe(paramaters: any, callback: any): any;
    updatefields(paramaters: any, callback: any): any;
    sendtransactionmail(paramaters: any, callback: any): any;
    uploadpersonalizedattachments(param: any, callback: any): any;
    test(): any;
}

export = Optivo;

