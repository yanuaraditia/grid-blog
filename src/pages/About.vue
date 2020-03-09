<template>
  <Layout :show-logo="true">
    <section class="my-resume">
        <div class="container-md">
            <div class="title">
                <h3>My Resume</h3>
            </div>
            <div class="image">
                <g-image src="~/assets/images/author.png" width="100" height="100" blur="5"/>
            </div>
            <div class="desc">
                <p>Hello! I’m Yanuar Aditia. Software Engineer from Indonesia, Yogyakarta, Sleman. I have rich experience in web
                    development and also UI / UX Development.</p>
                <div class="info-list">
                    <ul>
                        <li><strong class="text-primary">Age:</strong> {{ new Date().getFullYear() + (-1999) }}</li>
                        <li><strong class="text-primary">Residence:</strong> Indonesia</li>
                        <li><strong class="text-primary">Freelance:</strong> Available</li>
                        <li><strong class="text-primary">Address:</strong> Sleman, Yogyakarta, Indonesia</li>
                        <li><strong class="text-primary">Phone:</strong> +62 8224 3374 043</li>
                        <li><strong class="text-primary">E-mail:</strong> me@yanuaraditia.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="work-section my-4">
        <div class="container-md">
            <div class="row mt-3">
                <div class="col col-md">
                    <div class="title">
                        <h3>Experience</h3>
                    </div>
                    <div class="resume-item">
                        <div class="resume-item-list active">
                            <div class="date">2020 - Present</div>
                            <div class="name">UI UX Programmer - Tries.co.id</div>
                            <div class="single-post-text">
                                <p>Design and prepare UI UX for apps and handle CMS.</p>
                            </div>
                        </div>
                        <div class="resume-item-list active">
                            <div class="date">2019 - 2020</div>
                            <div class="name">Full-stack Developer - Balerita Florist.</div>
                            <div class="single-post-text">
                                <p>Design and maintain product catalog platform at baleritaflorist.com.</p>
                            </div>
                        </div>
                        <div class="resume-item-list active">
                            <div class="date">2018 - Present</div>
                            <div class="name">Chief Technology Officer - Paparkir.com</div>
                            <div class="single-post-text">
                                <p>Develop and maintain the main app of paparkir.</p>
                            </div>
                        </div>
                        <div class="resume-item-list active">
                            <div class="date">2017 -  2018</div>
                            <div class="name">Secretary and IT - Imaka.or.id.</div>
                            <div class="single-post-text">
                                <p>Maintain and develop imaka.or.id.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-md">
                    <div class="title">
                        <h3>Education</h3>
                    </div>
                    <div class="resume-item">
                        <div class="resume-item-list active">
                            <div class="date">2010 - 2013</div>
                            <div class="name">SMPN 1 Karanggayam - Central Java, Indonesia</div>
                            <div class="single-post-text">
                                <p>Middle School.</p>
                            </div>
                        </div>
                        <div class="resume-item-list active">
                            <div class="date">2013 - 2016</div>
                            <div class="name">SMK Komputer Karanganyar - Central Java, Indonesia</div>
                            <div class="single-post-text">
                                <p>Vocational High School.</p>
                            </div>
                        </div>
                        <div class="resume-item-list active">
                            <div class="date">2016 - 2019</div>
                            <div class="name">University of Amikom Yogyakarta - Indonesia</div>
                            <div class="single-post-text">
                                <p>Informatics Engineering concern at Software Engineering.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="my-skills">
        <div class="container-md">
            <div class="title">
                <h3>Coding Skills</h3>
            </div>
            <div class="skills percent">
                <ul>
                    <li>
                         <div class="name">HTML & SASS & CSS</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                        </div>
                    </li>
                    <li>
                        <div class="name">NodeJS</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                        </div>
                    </li>
                    <li>
                        <div class="name">PHP</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 78%;" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">78%</div>
                        </div>
                    </li>
                    <li>
                        <div class="name">SQL</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                        </div>
                    </li>
                    <li>
                        <div class="name">VueJS</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="known-interest my-5">
        <div class="container-md">
            <h3>Knowledge & Interest</h3>
            <ul>
                <li>MySQL</li>
                <li>Voyager</li>
                <li>RESTFull API</li>
                <li>Website Hosting</li>
                <li>Linux</li>
                <li>Design Fundamentals</li>
            </ul>
        </div>
    </section>
  </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'Me'
  }
}
</script>
<style lang='scss'>
.my-resume {
    margin-bottom: 7rem;
    .title {
        margin-bottom: 3rem;
    }
    .image {
        float: left;
        img {
            border-radius: 100px;
        }
    }
    .desc {
        @media screen and (min-width:992px) {
            margin-left: 130px;
        }
        .info-list {
            margin-bottom: 22px;
            ul {
                list-style: none;
                padding: 0;
                li {
                    display: inline-block;
                    vertical-align: top;
                    width: 32%;
                    margin: 12px 0 0;
                }
            }
        }
    }
}
.work-section {
    .resume-item {
        padding-left: 50px;
        margin-top: 2rem;
        &-list {
            position: relative;
            padding-bottom: 1.5rem;
            padding-top: 35px;
            &::before {
                content: "";
                height: 1px;
                width: 40px;
                left: -40px;
                background: var(--primary-color);
                position: absolute;
                top: 13px;
            }
            &::after {
                content: "";
                width: 1px;
                height: 100%;
                background: var(--primary-color);
                position: absolute;
                top: 0;
                left: -40px;
            }
            &:first-child {
                &::after {
                    top: 13px;
                    height: calc(100% - 13px);
                }
            }
            &:last-child {
                &::after {
                    height: 13px;
                }
            }
            .date {
                border: 1px solid var(--primary-color);
                color: var(--primary-color);
                padding: .25rem .5rem;
                font-size: 13px;
                position: absolute;
                top: 0;
                border-radius: var(--radius);
            }
            .name {
                font-weight: 500;
                color: var(--primary-color);
            }
        }
    }
}
.my-skills {
    .skills {
        ul {
            list-style: none;
            padding: 0;
            li {
                &:not(:last-child) {
                    margin-bottom: 1rem
                }
                .name {
                    margin-bottom: .5rem;
                    font-size: 12px;
                }
                .progress {
                    background: var(--bg-trans);
                    border-radius: 40px;
                    &-bar {
                        background: var(--primary-color);
                        border-radius: 40px;
                    }
                }
            }
        }
    }
}
.known-interest {
    margin-bottom: 22px;
    ul {
        list-style: none;
        padding: 0;
        li {
            display: inline-block;
            vertical-align: top;
            width: 32%;
            margin: 12px 0 0;
            padding-left: 25px;
            position: relative;
            &::after {
                content: "";
                height: 2px;
                width: 17px;
                left: 0;
                top: calc(50% - 1px);
                background: var(--primary-color);
                position: absolute;
            }
        }
    }
}
</style>