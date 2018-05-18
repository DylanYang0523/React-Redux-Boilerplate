const errHandler = (errInfo) => {
    console.log('== ERROR HANDLER ==');
    console.log(errInfo);
    console.log(errInfo.message);
    console.log(errInfo.res);
};

export default errHandler;
