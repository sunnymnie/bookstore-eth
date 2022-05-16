
import { useEffect } from "react"
import useSWR from "swr"

export const handler = (web3, provider) => () => {

    const adminAddresses = {
        "0x26a84006ff7d9b0f6f85a5a6a5d0b41e60c5f4e7c286b9d0051db2031b8fa622": true
    }

    const { data, mutate, ...rest } = useSWR(() =>
            web3 ? "web3/accounts" : null,
        async () => {
            const accounts = await web3.eth.getAccounts()
            return accounts[0]
        }
    )

    useEffect(() => {
        provider &&
        provider.on("accountsChanged",
            accounts => mutate(accounts[0] ?? null)
        )
    }, [provider])

    return {
        account: {
            data,
            isAdmin: (
                data &&
                adminAddresses[web3.utils.keccak256(data)]) ?? false,
            mutate,
            ...rest
        }
    }
}

/*
export const handler = (web3, provider) => () => {
    const [account, setAccount] = useState(null)

    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3.eth.getAccounts()
            setAccount(accounts[0])
        }

        web3 && getAccount()
    }, [web3])

    useEffect(() => {
        provider &&
        provider.on("accountsChanged",
            accounts => setAccount(accounts[0] ?? null)
        )
    }, [provider])

    return { account }
}
 */