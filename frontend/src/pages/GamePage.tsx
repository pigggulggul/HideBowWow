import { RecoilRoot } from 'recoil';
import { ClientSocketControls } from '../components/utilComponents/ClientSocketControls';
import { Content } from '../components/content/Content';

export default function GamePage() {
    return (
        <RecoilRoot>
            <Content />
            <ClientSocketControls />
        </RecoilRoot>
    );
}
