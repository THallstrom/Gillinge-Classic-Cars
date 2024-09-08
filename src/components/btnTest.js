function BtnTest({ info }) {
    return (
        <button className="bg-main text-text-color px-3 py-2 rounded-lg font-semibold border-text-color border hover:bg-text-color hover:text-main absolute bottom-5 left-2/4 transform -translate-x-1/2">{info.btnName}</button>
    );
}

export default BtnTest;
