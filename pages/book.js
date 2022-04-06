import { Modal } from "@components/common";
import {
    BookHero,
    Curriculum,
    Keypoints
} from "@components/book";
import { BaseLayout } from "@components/layout";

export default function Book() {

    return (
        <>
            <div className="py-4">
                <BookHero />
            </div>
            <Keypoints />
            <Curriculum />
            <Modal />
        </>
    )
}

Book.Layout = BaseLayout