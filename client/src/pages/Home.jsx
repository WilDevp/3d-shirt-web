import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot} from "valtio";
import  state  from "../store/index.js";
import CustomButton from "../components/CustomButton.jsx";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from "../config/motion.js";

const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img src="./threejs.png" alt="threejs" className="w-8 h-8 object-contain"/>
                    </motion.header>
                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                WILLDEVP <br className="xl:block" /> SHOPPING PRGRAMMING HODDIE
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Create your unique and exclusive hoodie with your favorite programming language.
                            </p>
                            <CustomButton
                            type="filled"
                            title="Customize Now"
                            handleClick={() => state.intro = false}
                            customStyles="w-fit px.4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}

export default Home;