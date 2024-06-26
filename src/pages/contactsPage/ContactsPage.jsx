import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';

import Section from '../../components/section/Section';
import Container from '../../components/container/Container';
import DocumentTitle from '../../components/documentTitle/DocumentTitle';
import SearchBox from '../../components/search-box/SearchBox';
import ContactForm from '../../components/contact-form/ContactForm';
import ContactList from '../../components/contact-list/ContactList';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <DocumentTitle>Contacts</DocumentTitle>
        <h1 className={css.contactsPageTitle}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Container>
    </Section>
  );
};

export default ContactsPage;
