import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { Text } from "../pages/[id]";
import styles from "../pages/index.module.css";
import delayScrollAnime from '../styles/style';
import $ from 'jquery'

const BlogList = ({ posts, isAnimation }) => {
    const [scrollValue, setScrollValue] = useState(0)
    const [opacity, setOpacity] = useState({ opacity: '0' })

    const blogLinkStyle = {
        display: 'block',
        textAlign: 'right'
    }

    useEffect(() => {
        if (!isAnimation) {
            setOpacity(state => ({ ...state, opacity: '1' }))
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (isAnimation) {
                setScrollValue($(window).scrollTop())
            }
        });

        if (isAnimation) {

            delayScrollAnime('.delayShowBlog', 'listAnimation', scrollValue)
        }
    }, [scrollValue])


    return (
        <>
            <h2 className={`${styles.heading}`}>NEWS</h2>
            <ol className={`${styles.posts} delayShowBlog`} >
                {posts.map((post) => {
                    if (!post.properties.isPublish.checkbox) { return; }

                    const date = new Date(post.last_edited_time).toLocaleDateString('ja-JP')
                    const authers = []
                    post.properties.Auther.multi_select.map((auther) => {
                        authers.push(auther.name)
                    })

                    return (
                        <li key={post.id} className={`${styles.post}`} style={opacity}>
                            <h3 className={styles.postTitle}>
                                <Link href={`/${post.id}`}>
                                    <a>
                                        <Text text={post.properties.Name.title} />
                                    </a>
                                </Link>
                            </h3>
                            <div className={styles.postDescription}>
                                <p >{`Last Update: ${date}`}</p>
                                <p>{`auther: `}
                                    {authers.map((auther, index) => (
                                        <span key={index} style={{ margin: '0 5px' }}>{auther}</span>
                                    ))}
                                </p>
                            </div>
                            <Link href={`/${post.id}`}>
                                <a style={blogLinkStyle}> 記事を読む →</a>
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </>
    )
}

export default BlogList