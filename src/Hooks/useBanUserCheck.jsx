import useAxiosPublic from "./useAxiosPublic";

const useBanUserCheck = () => {
    const axiosPublic = useAxiosPublic()
    return async function(userMail) {
        const isBanUser = await axiosPublic.get(`/check-ban-user?email=${userMail}`)
        return isBanUser.data
    }
};

export default useBanUserCheck;