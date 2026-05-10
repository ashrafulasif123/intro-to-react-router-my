import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";

const Root = () => {
    const navigation = useNavigation()
    return (
        <div className="relative min-h-screen">
            <Header></Header>
            <div className="max-w-[1200px] mx-auto">
                {
                    navigation.state === 'loading'
                        ? <div className="absolute inset-0 flex justify-center items-center">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                        : <Outlet />
                }
            </div>
        </div>


    );
};

export default Root;
